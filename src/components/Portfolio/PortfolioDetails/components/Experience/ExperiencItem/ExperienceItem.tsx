import {
  formatPeriodDiff,
  formatPeriodShort,
  getCurrentPeriod,
  getTotalTime,
} from "../../../../common/helpers";
import "./ExperienceItem.scss";

export interface ExperienceItemProps {
  header?: { name: string; imageUrl: string };
  meta: {
    position: string;
    type: "Full-time" | "Part-time" | "Internship";
    location: string;
    remote: boolean;
  };
  bullets?: string[];
  period: { start: number; end?: number };
  child?: ExperienceItemProps;
}

const ExperienceItem = ({
  header,
  meta,
  bullets,
  period,
  child,
}: ExperienceItemProps) => {
  return (
    <>
      {header && (
        <div className="experience-item__header">
          <div className="experience-item__header__image">
            <img src={header.imageUrl} alt={header.name} />
          </div>
          <div className="experience-item__header__info">
            <p>{header.name}</p>
            <p>{getTotalTime(period, child)}</p>
          </div>
        </div>
      )}
      <div className="experience-item__content">
        {child && (
          <>
            <ExperienceItem
              key={child.period.start}
              meta={child.meta}
              bullets={child.bullets}
              period={child.period}
              child={child.child}
            />
            <div className="experience-item__separator">
              {[...Array(5)].map((_, i) => (
                <div key={i}></div>
              ))}
            </div>
          </>
        )}
        <div
          className={`experience-item ${
            !period.end && period.start <= getCurrentPeriod()
              ? "experience-item--current"
              : ""
          }`}
        >
          <p>{meta.position}</p>
          <p>{meta.type}</p>
          <p>{meta.location}</p>
          {meta.remote && <p>Remote</p>}
          <p>
            {formatPeriodShort(period.start)} -{" "}
            {period.end ? formatPeriodShort(period.end) : "Present"}{" "}
            {formatPeriodDiff(period.start, period.end || getCurrentPeriod())}
          </p>
          <ul>
            {bullets?.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
