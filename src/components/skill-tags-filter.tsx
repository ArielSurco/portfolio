import { SkillTag } from "../constants/skills"
import { cn } from "../utils/cn"

const filters = Object.values(SkillTag)

interface SkillTagsFilterProps {
  selectedFilter: SkillTag
  onFilterChange: (filter: SkillTag) => void
}

export const SkillTagsFilter = ({ selectedFilter, onFilterChange }: SkillTagsFilterProps) => {
  const handleFilterChange = (filter: SkillTag) => {
    onFilterChange(filter)
  }

  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button onClick={() => handleFilterChange(filter)} className={cn("capitalize", "text-base text-slate-100 border border-teal-400 px-2 py-1 rounded-md hover:bg-teal-400 hover:text-neutral-900 transition-all duration-300 bg-neutral-900", selectedFilter === filter && 'bg-teal-400 text-slate-900')}>
          {filter}
        </button>
      ))}
    </div>
  )
}
