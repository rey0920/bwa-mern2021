import Link from "next/link";
import cx from "classnames";

interface ButtonTabProps {
  href: string;
  title: string;
  active: boolean;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { href, title, active } = props;

  const btnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <Link href={href}>
      <a data-filter="*" className={btnClass}>
        {title}
      </a>
    </Link>
  );
}
