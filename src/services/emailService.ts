import { api } from "./apiService";

interface SendEmailRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  company: string;
  websiteType: string;
  message: string;
}
const email = api.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation<void, SendEmailRequest>({
      query: (body) => ({
        url: "/email",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = email;
