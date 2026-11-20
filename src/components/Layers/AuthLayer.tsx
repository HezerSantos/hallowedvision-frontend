import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import Unauthorized from "../../Pages/Errors/Unauthorized";

import LoadingBar from "../common/LoadingBar/LoadingBar";
import { login, logout } from "../../reducers/authSlice";
import {
  useRefreshMutation,
  usePublicRefreshMutation,
  usePublicLoginMutation,
} from "../../services/authService";

interface AuthLayerProps {
  children: ReactNode;
  //This is for if a specific outlet needs auth context
  //e.g you have a login button on home page and the page
  //should not say unauthorized if they are unauthorized
  disableUnauthorizedPage?: boolean;
  isPublic?: boolean;
}
const AuthLayer = ({
  children,
  disableUnauthorizedPage,
  isPublic,
}: AuthLayerProps) => {
  const auth = useAppSelector((s) => s.auth);
  const [refreshUser, { isLoading: refreshLoading, isError: refreshError }] =
    useRefreshMutation();
  const [pubblicRefreshUser, { isLoading: publicRefreshLoading, error }] =
    usePublicRefreshMutation();
  const [
    publicLogin,
    { isLoading: publicLoginLoading, isError: publicLoginError },
  ] = usePublicLoginMutation();
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  const refreshToken = useCallback(async () => {
    try {
      const refreshResponse = await refreshUser().unwrap();

      dispatch(
        login({
          token: refreshResponse.token,
          expiresAt: refreshResponse.expiresAt,
          id: refreshResponse.userId,
          email: refreshResponse.email,
          issuedAt: refreshResponse.issuedAt,
        }),
      );
    } catch {
      return;
    } finally {
      setAuthChecked(true);
    }
  }, []);

  const refreshPublicToken = useCallback(async () => {
    try {
      const refreshResponse = await pubblicRefreshUser().unwrap();

      dispatch(
        login({
          token: refreshResponse.token,
          expiresAt: refreshResponse.expiresAt,
          issuedAt: refreshResponse.issuedAt,
        }),
      );
    } catch {
      return;
    } finally {
      setAuthChecked(true);
    }
  }, []);

  const fetchPublicToken = useCallback(async () => {
    try {
      const publicLoginResponse = await publicLogin().unwrap();
      dispatch(
        login({
          token: publicLoginResponse.token,
          expiresAt: publicLoginResponse.expiresAt,
          issuedAt: publicLoginResponse.issuedAt,
        }),
      );
    } catch {
      return;
    } finally {
      setAuthChecked(true);
    }
  }, []);

  useEffect(() => {
    if (refreshError) {
      dispatch(logout());
      return;
    }
    if (auth.isAuthorized || Date.now() < auth.expiresAt * 1000) {
      setAuthChecked(true);
    } else {
      if (isPublic) {
        refreshPublicToken();
      } else {
        refreshToken();
      }
    }

    const interval = setInterval(
      () => {
        if (isPublic) {
          refreshPublicToken();
        } else {
          refreshToken();
        }
      },
      10 * 60 * 1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [refreshUser, refreshPublicToken, dispatch, refreshError, isPublic]);

  useEffect(() => {
    if (error && "status" in error && error.status === 401) {
      fetchPublicToken();
    }
  }, [error]);

  const isLoading =
    publicLoginLoading || publicRefreshLoading || refreshLoading;
  const isError = publicLoginError || refreshError;

  if (!authChecked || isLoading) {
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingBar loading={true} />
      </div>
    );
  }

  if ((!auth.isAuthorized || isError) && !disableUnauthorizedPage) {
    return <Unauthorized />;
  }
  return children;
};

export default AuthLayer;
