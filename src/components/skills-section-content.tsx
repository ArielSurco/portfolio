import { useMemo, useState } from "react"
import { skillsByTag, SkillTag, type Skill } from "../constants/skills"
import { SkillItem } from "./skill-item"
import { SkillTagsFilter } from "./skill-tags-filter"

const DEFAULT_FILTER = SkillTag.OVERVIEW

const MAX_SKILLS_PER_ROW = 7
const MAX_SKILLS_ROWS = 2
const maxSkillsQuantity = MAX_SKILLS_PER_ROW * MAX_SKILLS_ROWS

export const SkillsSectionContent = () => {
  const [selectedFilter, setSelectedFilter] = useState<SkillTag>(DEFAULT_FILTER)

  const filteredSkills = useMemo<Skill[]>(() => {
    return skillsByTag[selectedFilter].slice(0, maxSkillsQuantity)
  }, [selectedFilter])

  return (
    <div className="flex flex-col gap-8 w-fit px-8">
      <SkillTagsFilter selectedFilter={selectedFilter} onFilterChange={(value) => setSelectedFilter(value)} />
      <div className="grid md:grid-cols-7 sm:grid-cols-5 grid-cols-4 gap-10 max-w-fit ">
        {filteredSkills.map((skill) => (
          <SkillItem src={skill.src} title={skill.title} />
        ))}
      </div>      
    </div>
  )
}