import { useEffect, useState } from 'react';
import clsx from 'clsx';

import useServiceStatus from '../hooks/useServiceStatus.js';
import './ServiceStatusStrip.css';

export default function ServiceStatusStrip() {
  const [expanded, setExpanded] = useState(false);
  const { statuses, isLoading } = useServiceStatus();

  useEffect(() => {
    if (statuses.some((service) => !service.healthy)) {
      setExpanded(true);
    }
  }, [statuses]);

  if (isLoading) {
    return null;
  }

  return (
    <div className={clsx('service-strip', expanded && 'service-strip--expanded')}>
      <button
        type="button"
        className="service-strip__toggle"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        <span className="material-symbols-rounded" aria-hidden>
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
        Tình trạng dịch vụ
      </button>
      <div className="service-strip__content">
        {statuses.map((service) => (
          <div key={service.id} className={clsx('service-strip__item', !service.healthy && 'service-strip__item--error')}>
            <div className="service-strip__indicator" aria-hidden />
            <div>
              <div className="service-strip__name">{service.name}</div>
              <div className="service-strip__desc">{service.description}</div>
            </div>
            <div className="service-strip__state">{service.healthy ? 'Hoạt động ổn định' : 'Gián đoạn'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
