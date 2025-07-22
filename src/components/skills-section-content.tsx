import { useMemo, useState } from "react"
import { skillsByTag, SkillTag, type Skill } from "../constants/skills"
import { SkillItem } from "./skill-item"
import { SkillTagsFilter } from "./skill-tags-filter"

const DEFAULT_FILTER = SkillTag.OVERVIEW

export const SkillsSectionContent = () => {
  const [selectedFilter, setSelectedFilter] = useState<SkillTag>(DEFAULT_FILTER)

  const filteredSkills = useMemo<Skill[]>(() => {
    return skillsByTag[selectedFilter]
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