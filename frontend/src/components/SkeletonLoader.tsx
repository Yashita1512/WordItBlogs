export const SkeletonLoader = ({className} : { className : string }) => {
    return (
        <div className={`${className} animate-pulse bg-gray-300`}>
        </div>
    );
};
