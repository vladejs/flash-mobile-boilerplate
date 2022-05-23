In order to work on any feature, the developer must follow this steps:

#### 1. Checkout a new branch from develop

A common mistake is that developers start new work from other branches
and the new PRs contain duplicate work. To avoid that, please follow always this steps
before starting a new block of work

```
git checkout develop
git pull origin develop

git checkout -b [feature|fix|enhancement]/issue#/short-name
```

#### 2. Commits should be identified

When committing, use the template: `issue# - Commit description`.
There is no need to put `fixes #23` on the commit description
