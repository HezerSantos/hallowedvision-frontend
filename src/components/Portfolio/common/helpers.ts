import { ExperienceItemProps } from "../PortfolioDetails/PortfolioDetails";

export const formatPeriodDiff = (startPeriod: number, endPeriod: number) => {
  const startYear = Math.floor(startPeriod / 100);
  const startMonth = startPeriod % 100;

  const endYear = Math.floor(endPeriod / 100);
  const endMonth = endPeriod % 100;

  // Validate month range (1-12)
  if (startMonth < 1 || startMonth > 12 || endMonth < 1 || endMonth > 12) {
    return "";
  }

  const totalStartMonths = startYear * 12 + (startMonth - 1);
  const totalEndMonths = endYear * 12 + (endMonth - 1);

  if (totalEndMonths < totalStartMonths) {
    return "";
  }

  // Inclusive of both start and end periods
  const diffMonths = totalEndMonths - totalStartMonths + 1;

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  const yearPart =
    years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
  const monthPart =
    months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";

  if (yearPart && monthPart) {
    return `${yearPart} ${monthPart}`;
  }

  return yearPart || monthPart || "0 months";
};

export const getCurrentPeriod = (useUTC = false) => {
  const now = new Date();
  const year = useUTC ? now.getUTCFullYear() : now.getFullYear();
  const month = (useUTC ? now.getUTCMonth() : now.getMonth()) + 1;
  return year * 100 + month;
};

export const getTotalTime = (
  initialPeriod: { start: number; end?: number },
  child?: ExperienceItemProps,
) => {
  const dfs = (child?: ExperienceItemProps) => {
    if (!child) {
      return undefined;
    }
    if (!child.child) {
      if (child.period.end) {
        return child.period.end;
      } else {
        return getCurrentPeriod();
      }
    }

    return dfs(child.child);
  };

  const finalPeriod = dfs(child);
  const endPeriod = finalPeriod
    ? finalPeriod
    : initialPeriod.end || getCurrentPeriod();

  const startPeriod = initialPeriod.start;

  return formatPeriodDiff(startPeriod, endPeriod);
};

const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatPeriodShort = (period: number) => {
  const year = Math.floor(period / 100);
  const month = period % 100;

  return month >= 1 && month <= 12 ? `${SHORT_MONTHS[month - 1]} ${year}` : "";
};
