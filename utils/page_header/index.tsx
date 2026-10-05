type HeaderTypeProps ={
    title: string;
    description: string;
}

const PageHeader = ({title,description}: HeaderTypeProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-semibold text-black text-2xl">
          {title}
        </h1>

        <p className="text-gray-600 text-center">
         {description}
        </p>
      </div>
  )
}

export default PageHeader