---
layout: post
title: "The Lifetime Repository"
subtitle: "Reduce Activation Energy And Experiment Faster"
---

#### Summary/TLDR
**TODO**

It's a common pattern: you have an idea for a project, get excited about it for
a few days, and then it fizzles. If you've been around this loop a few times,
you've probably cycled through a few strategies for capturing these little
sparks of inspiration---maybe you enter the idea in a ticket system, or a
personal Kanban board, or maybe you even get as far as creating a new Git
repository. In my experience, these ideas tend lose their vitality and die
after a few weeks. Progress on the initial stages of a project goes too slowly
to sustain your initial excitement, and eventually the idea gets added to the
pile of "To Do Eventually" tasks that you carry around from productivity tool
to productivity tool. **TODO Screenshot**

This loop is disappointing for anyone who enjoys being creative in code, but as
a researcher it's devastating. I have a host of research ideas sitting in
abandoned repositories and brainstorming documents, but few of them see the
light of day. How well, then, am I doing the exploratory portion of research,
if I can't manage to follow through on inspiration when it strikes? I've 
spent a lot of time worrying about this over the course of my PhD. It was only
recently, as the COVID-19 pandemic forced me to figure out how to be productive
working from home, that I found a solution[^1]: The Lifetime Repository. The rest
of this post will describe the motivation, philosophy, and implementation of
this idea in more detail.

#### Motivation: Research Code
- Many small projects exploring different ideas
- Often using similar code
- Creating new projects encourages adoption of dependencies, rather than understanding


#### Motivation: Intermediate Programming
- Tutorials cover beginners
- Advice for intermediate programmers is to do personal projects
- Personal projects run into the same problems as research code

#### A Solution: The Lifetime Repository
- One repository for all projects
- Incremental improvements
- A fundamental commitment to short, free functions over abstraction
- A focus on rapid prototyping (the scripts directory, headers and tests with sources)
- Re-implementation preferred over new dependencies

#### Examples From My Lifetime Repository
- Starting
- Structural Changes
- Making Incremental Improvements Using Issues
- The Importance of Testing
- Extracting Sensitive Code Into Private Submodules
- Activity Graph From Github
- Further example: [Jacob's lifetime repo](https://github.com/jpanikulam/experiments)

```c++
int main() {
  int tmp;
  log_info("Hello");
}
```

\$$x = \int_0^\infty y e^{2\pi}$$

[^1]: Original credit for this idea goes to [Jacob Panikulam](http://jpanikulam.github.io/) and [Isaac Dykeman](https://ijdykeman.github.io/), who recommended it to me when I was down and out.
