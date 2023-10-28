export default function Title({title}) {
    return (
        <h1 className="text-3xl leading-normal sm:text-5xl sm:leading-normal font-body dark:text-white">
            <span className='rounded border-b-4 border-primary dark:border-secondary'>{title}</span>&nbsp;
        <span role="img" aria-label={title}>
   
        </span>
      </h1>
    )
}