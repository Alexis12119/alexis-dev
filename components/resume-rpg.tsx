"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAchievements } from "@/hooks/use-achievements"
import { Sword, Shield, Zap, Heart, Star, Trophy, Coffee } from "lucide-react"

export function ResumeRPG() {
  const { unlockAchievement } = useAchievements()
  const [selectedTab, setSelectedTab] = useState("stats")

  useEffect(() => {
    unlockAchievement("resume-viewer", "RPG Resume Viewer", "Checked the RPG resume", "🎲")
  }, [unlockAchievement])

  const characterStats = {
    level: 22, // Age or experience level
    class: "Full-Stack Developer",
    title: "The Code Whisperer",
    hp: 100,
    mp: 85,
    exp: 2847,
    nextLevel: 3000,
  }

  const attributes = {
    coding: 92,
    problemSolving: 88,
    learning: 95,
    communication: 82,
    creativity: 87,
    teamwork: 85,
  }

  const skills = [
    { name: "JavaScript Mastery", level: 90, type: "magic", icon: "⚡" },
    { name: "React Sorcery", level: 88, type: "magic", icon: "🔮" },
    { name: "Node.js Expertise", level: 85, type: "combat", icon: "⚔️" },
    { name: "TypeScript Precision", level: 87, type: "combat", icon: "🎯" },
    { name: "Database Wizardry", level: 80, type: "magic", icon: "🗄️" },
    { name: "Neovim Mastery", level: 95, type: "special", icon: "🏹" },
    { name: "Git Version Control", level: 83, type: "utility", icon: "🛡️" },
    { name: "Problem Solving", level: 92, type: "special", icon: "🧩" },
  ]

  const achievements = [
    { name: "First Commit", description: "Made first Git commit", date: "2020", rarity: "common" },
    { name: "Bug Slayer", description: "Fixed 100+ bugs", date: "2022", rarity: "rare" },
    { name: "Open Source Hero", description: "Contributed to open source", date: "2023", rarity: "epic" },
    { name: "Neovim Sage", description: "Mastered Neovim configuration", date: "2023", rarity: "legendary" },
    { name: "Full-Stack Warrior", description: "Built complete applications", date: "2024", rarity: "epic" },
  ]

  const quests = [
    { name: "College Quest", status: "In Progress", progress: 75, reward: "Bachelor's Degree" },
    { name: "Freelance Adventures", status: "Ongoing", progress: 100, reward: "Client Satisfaction" },
    { name: "Open Source Contributions", status: "Active", progress: 60, reward: "Community Recognition" },
    { name: "Master Neovim", status: "Completed", progress: 100, reward: "Ultimate Productivity" },
  ]

  const inventory = [
    { name: "MacBook Pro", type: "Weapon", rarity: "epic", description: "Primary development machine" },
    { name: "Mechanical Keyboard", type: "Accessory", rarity: "rare", description: "Cherry MX switches" },
    { name: "Multiple Monitors", type: "Enhancement", rarity: "uncommon", description: "Productivity boost" },
    { name: "Coffee Mug", type: "Consumable", rarity: "legendary", description: "Infinite energy source" },
    { name: "Neovim Config", type: "Spell Book", rarity: "legendary", description: "Custom editor setup" },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-500 border-yellow-500"
      case "epic":
        return "text-purple-500 border-purple-500"
      case "rare":
        return "text-blue-500 border-blue-500"
      case "uncommon":
        return "text-green-500 border-green-500"
      default:
        return "text-gray-500 border-gray-500"
    }
  }

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>resume.rpg
            </h2>
            <p className="text-xl text-muted-foreground">Character Sheet & Adventure Log</p>
          </div>

          {/* Character Overview */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center">
                    <Sword className="h-6 w-6 mr-2 text-primary" />
                    {characterStats.class}
                  </CardTitle>
                  <p className="text-muted-foreground">{characterStats.title}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">Lv. {characterStats.level}</div>
                  <div className="text-sm text-muted-foreground">College Student</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">Health</div>
                    <Progress value={characterStats.hp} className="w-20" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">Mana</div>
                    <Progress value={characterStats.mp} className="w-20" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                    <Progress value={(characterStats.exp / characterStats.nextLevel) * 100} className="w-20" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <div>
                    <div className="text-sm text-muted-foreground">Caffeine</div>
                    <Progress value={95} className="w-20" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="quests">Quests</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Core Attributes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(attributes).map(([attr, value]) => (
                      <div key={attr} className="flex items-center justify-between">
                        <span className="capitalize font-medium">{attr.replace(/([A-Z])/g, " $1")}</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={value} className="w-24" />
                          <span className="text-sm font-mono w-8">{value}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Character Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Race:</span>
                      <span>Human</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Class:</span>
                      <span>Full-Stack Developer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specialization:</span>
                      <span>Neovim Sage</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Guild:</span>
                      <span>Open Source Contributors</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span>Philippines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Available for Quests
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Badge variant="outline" className={`text-xs ${getRarityColor(skill.type)}`}>
                          {skill.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={skill.level} className="flex-1" />
                        <span className="text-sm font-mono w-8">{skill.level}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="quests" className="mt-6">
              <div className="space-y-4">
                {quests.map((quest, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{quest.name}</h3>
                        <Badge
                          variant={quest.status === "Completed" ? "default" : "outline"}
                          className={quest.status === "Completed" ? "bg-green-600" : ""}
                        >
                          {quest.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Progress value={quest.progress} className="flex-1" />
                        <span className="text-sm text-muted-foreground">Reward: {quest.reward}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`border-2 ${getRarityColor(achievement.rarity)}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold flex items-center">
                          <Trophy className="h-4 w-4 mr-2" />
                          {achievement.name}
                        </h3>
                        <Badge variant="outline" className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">Unlocked: {achievement.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inventory.map((item, index) => (
                  <Card key={index} className={`border-2 ${getRarityColor(item.rarity)}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{item.name}</h3>
                        <Badge variant="outline" className={getRarityColor(item.rarity)}>
                          {item.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
