interface BreadcrumbItemProps {
    href: string;
    label: string;
    home?: boolean;
}

export default function BreadcrumbItem({ href, label }: BreadcrumbItemProps) {
    return (
        <li className="inline-flex items-center">
            <a href={href} className="inline-flex items-center lg:text-2xl font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                {" / "}
                {label}
            </a>
        </li>
    )
}