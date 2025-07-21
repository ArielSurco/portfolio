interface SkillItemProps {
  src: string
  title: string
}

export const SkillItem = ({ src, title }: SkillItemProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 w-[90px]">
      <img src={src} alt={title} className="w-[50px] h-[50px]"/>
      <h3 className="text-slate-100">{title}</h3>
    </div>
  )
}

