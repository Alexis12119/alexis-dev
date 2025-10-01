"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAchievements } from "@/hooks/use-achievements";
import { useGithubData } from "@/hooks/use-github-data";
import { Briefcase, Code, Zap, Heart, Star, Trophy, Coffee, Layers, Server, Database, Edit, GitBranch, Lightbulb } from "lucide-react";

export function ResumeRPG() {
  const { unlockAchievement } = useAchievements();
  const [selectedTab, setSelectedTab] = useState("stats");
  const { data: githubData } = useGithubData();

  const birthDate = new Date("2004-11-16");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if birthday hasn't occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  const characterStats = {
    level: age,
    class: "Full-Stack Developer",
    title: "Senior Software Engineer",
    hp: 100,
    mp: 85,
    exp: 2847,
    nextLevel: 3000,
  };

  const [attributes, setAttributes] = useState({
    coding: 92,
    problemSolving: 88,
    learning: 95,
    communication: 82,
    creativity: 87,
    teamwork: 85,
  });

  const skills = [
    { name: "JavaScript", level: 90, icon: <Zap className="h-4 w-4" /> },
    { name: "React", level: 88, icon: <Layers className="h-4 w-4" /> },
    { name: "Node.js", level: 85, icon: <Server className="h-4 w-4" /> },
    { name: "TypeScript", level: 87, icon: <Code className="h-4 w-4" /> },
    { name: "Database", level: 80, icon: <Database className="h-4 w-4" /> },
    { name: "Neovim", level: 95, icon: <Edit className="h-4 w-4" /> },
    { name: "Git Version Control", level: 83, icon: <GitBranch className="h-4 w-4" /> },
    { name: "Problem Solving", level: 92, icon: <Lightbulb className="h-4 w-4" /> },
  ];

  const projects = [
    {
      name: "Academic Pursuit",
      status: "In Progress",
      progress: 75,
      reward: "Bachelor's Degree",
    },
    {
      name: "Freelance Projects",
      status: "Ongoing",
      progress: 100,
      reward: "Client Satisfaction",
    },
    {
      name: "Open Source Contributions",
      status: "Active",
      progress: 60,
      reward: "Community Recognition",
    },
    {
      name: "Neovim Enhancement",
      status: "Completed",
      progress: 100,
      reward: "Enhanced Productivity",
    },
  ];

  const generateAchievements = () => {
    const { repos, events } = githubData;
    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalContributions = events.filter(event => ['PushEvent', 'IssuesEvent', 'PullRequestEvent'].includes(event.type)).length;
    const languages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];

    return [
      {
        name: "Repository Creator",
        description: `Created ${totalRepos} public repositories`,
        date: "Ongoing",
        rarity: totalRepos > 10 ? "epic" : "common",
      },
      {
        name: "Community Favorite",
        description: `Earned ${totalStars} stars across projects`,
        date: "Ongoing",
        rarity: totalStars > 50 ? "legendary" : totalStars > 10 ? "rare" : "common",
      },
      {
        name: "Active Contributor",
        description: `Made ${totalContributions} contributions`,
        date: "Ongoing",
        rarity: totalContributions > 100 ? "epic" : totalContributions > 50 ? "rare" : "common",
      },
      {
        name: "Polyglot Developer",
        description: `Worked with ${languages.length} programming languages`,
        date: "Ongoing",
        rarity: languages.length > 5 ? "legendary" : languages.length > 3 ? "epic" : "rare",
      },
      {
        name: "Open Source Advocate",
        description: "Contributed to open source projects",
        date: "2023",
        rarity: "epic",
      },
    ];
  };

  const achievements = generateAchievements();

  const tools = [
    {
      name: "Lenovo ThinkPad L430",
      type: "Hardware",
      rarity: "epic",
      description: "Primary development machine",
    },
    {
      name: "Coffee Mug",
      type: "Accessory",
      rarity: "uncommon",
      description: "Daily productivity enhancer",
    },
    {
      name: "Neovim Configuration",
      type: "Software",
      rarity: "legendary",
      description: "Custom editor setup",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-500 border-yellow-500";
      case "epic":
        return "text-purple-500 border-purple-500";
      case "rare":
        return "text-blue-500 border-blue-500";
      case "uncommon":
        return "text-green-500 border-green-500";
      default:
        return "text-gray-500 border-gray-500";
    }
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="font-mono text-primary">~/</span>resume.rpg
            </h2>
             <p className="text-xl text-muted-foreground">
               Professional Profile & Career Overview
             </p>
          </div>

          {/* Character Overview */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
             <CardHeader>
               <div className="flex items-center justify-between">
                 <div>
                   <CardTitle className="text-2xl flex items-center">
                     <Briefcase className="h-6 w-6 mr-2 text-primary" />
                     {characterStats.class}
                   </CardTitle>
                   <p className="text-muted-foreground">
                     {characterStats.title}
                   </p>
                 </div>
                 <div className="text-right">
                   <div className="text-3xl font-bold text-primary">
                     Lv. {characterStats.level}
                   </div>
                   <div className="text-sm text-muted-foreground">
                     College Student
                   </div>
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
                    <div className="text-sm text-muted-foreground">
                      Experience
                    </div>
                    <Progress
                      value={
                        (characterStats.exp / characterStats.nextLevel) * 100
                      }
                      className="w-20"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="h-5 w-5 text-amber-600" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Caffeine
                    </div>
                    <Progress value={95} className="w-20" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
             <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-8">
               <TabsTrigger value="stats">Overview</TabsTrigger>
               <TabsTrigger value="skills">Skills</TabsTrigger>
               <TabsTrigger value="achievements">Achievements</TabsTrigger>
               <TabsTrigger value="inventory">Tools</TabsTrigger>
             </TabsList>

            <TabsContent value="stats" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center">
                       <Code className="h-5 w-5 mr-2" />
                       Core Attributes
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {Object.entries(attributes).map(([attr, value]) => (
                       <div
                         key={attr}
                         className="flex items-center justify-between"
                       >
                         <span className="capitalize font-medium">
                           {attr.replace(/([A-Z])/g, " $1")}
                         </span>
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
                      <span className="text-muted-foreground">
                        Specialization:
                      </span>
                      <span>Back End Development</span>
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
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        Available for Job Quests
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                       <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center space-x-2">
                           {skill.icon}
                           <span className="font-medium">{skill.name}</span>
                         </div>
                       </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={skill.level} className="flex-1" />
                        <span className="text-sm font-mono w-8">
                          {skill.level}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

             <TabsContent value="projects" className="mt-6">
               <div className="space-y-4">
                 {projects.map((project, index) => (
                   <Card key={index}>
                     <CardContent className="p-4">
                       <div className="flex items-center justify-between mb-2">
                         <h3 className="font-semibold">{project.name}</h3>
                         <Badge
                           variant={
                             project.status === "Completed" ? "default" : "outline"
                           }
                           className={
                             project.status === "Completed" ? "bg-green-600" : ""
                           }
                         >
                           {project.status}
                         </Badge>
                       </div>
                       <div className="flex items-center space-x-4">
                         <Progress value={project.progress} className="flex-1" />
                         <span className="text-sm text-muted-foreground">
                           Reward: {project.reward}
                         </span>
                       </div>
                     </CardContent>
                   </Card>
                 ))}
               </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`border-2 ${getRarityColor(achievement.rarity)}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold flex items-center">
                          <Trophy className="h-4 w-4 mr-2" />
                          {achievement.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className={getRarityColor(achievement.rarity)}
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Unlocked: {achievement.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="mt-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {tools.map((tool, index) => (
                   <Card
                     key={index}
                     className={`border-2 ${getRarityColor(tool.rarity)}`}
                   >
                     <CardContent className="p-4">
                       <div className="flex items-center justify-between mb-2">
                         <h3 className="font-semibold">{tool.name}</h3>
                         <Badge
                           variant="outline"
                           className={getRarityColor(tool.rarity)}
                         >
                           {tool.rarity}
                         </Badge>
                       </div>
                       <p className="text-sm text-muted-foreground mb-1">
                         {tool.type}
                       </p>
                       <p className="text-xs text-muted-foreground">
                         {tool.description}
                       </p>
                     </CardContent>
                   </Card>
                 ))}
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
