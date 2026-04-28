# Contributing to GitHub Health Monitor MCP

Thank you for your interest in contributing! This document outlines the process and requirements for contributing to this project.

## 🌟 Star Requirement

**Important: Pull Requests can only be merged if you have ⭐ starred this repository!**

This requirement helps us understand who is genuinely interested in the project and encourages community engagement. Please star the repository before submitting a PR.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Basic understanding of TypeScript
- Familiarity with MCP (Model Context Protocol)
- A GitHub account with the repository starred ⭐

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/IN3PIRE/github-health-monitor.git
   cd github-health-monitor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

4. **Make your changes**
   - Write your code
   - Add tests if applicable
   - Update documentation

5. **Build and test**
   ```bash
   npm run build
   # Test your changes manually or add automated tests
   ```

6. **Submit a pull request**
   - Ensure you have starred the repository ⭐
   - Fill out the PR template
   - Link any related issues

## 📝 Beginner-Friendly Issues

Look for issues labeled `good first issue` or `beginner-friendly`. These are specifically designed for new contributors!

### Current Beginner Issues:

- **#1** - Add more configuration options for health thresholds
- **#2** - Improve error handling for API rate limits
- **#3** - Add unit tests for health monitoring functions
- **#4** - Create example MCP client configuration
- **#5** - Add logging for monitoring operations

### How to Work on Beginner Issues:

1. Comment on the issue: "I would like to work on this"
2. Wait for confirmation from maintainers
3. Fork the repository if you haven't already
4. Create a feature branch
5. Make your changes
6. Submit a PR linking the issue

## 🏷️ Issue Labels

- `good first issue` - Perfect for newcomers
- `beginner-friendly` - Low complexity tasks
- `help wanted` - Extra attention needed
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Docs improvement needed

## 💡 Contribution Ideas

- Add new health metrics
- Improve MCP resource/tool interfaces
- Add more configuration options
- Create example integrations
- Write better error messages
- Add logging and monitoring
- Improve TypeScript types
- Add unit/integration tests

## 🔄 Pull Request Process

1. **Star the repository** ⭐ (required!)
2. **Create a feature branch** from `main`
3. **Make focused changes** - one PR per feature/fix
4. **Write clear commit messages** following conventional commits
5. **Update documentation** if needed
6. **Test your changes** thoroughly
7. **Submit PR** with detailed description
8. **Respond to feedback** from maintainers
9. **Get your PR merged!**

### PR Title Format

Use conventional commits format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `chore:` - Maintenance
- `refactor:` - Code refactoring

Example: `feat: add configurable health threshold options`

## 🧪 Testing

While we don't have a full test suite yet, please:
- Test your changes manually
- Ensure the build passes: `npm run build`
- Verify MCP protocol compliance
- Test with real GitHub repositories

## 📚 Code Style

- Use TypeScript strict mode
- Follow existing code patterns
- Use descriptive variable names
- Add JSDoc comments for public functions
- Keep functions small and focused

## 🆘 Getting Help

- Comment on issues for clarification
- Ask questions in discussions
- Tag maintainers if stuck
- Check existing PRs for examples

## ✨ Recognition

Contributors will be:
- Listed in README.md (with permission)
- Mentioned in release notes
- Awarded with GitHub badges
- Invited to join organization (active contributors)

## 📖 Resources

- [MCP Protocol Documentation](https://modelcontextprotocol.io/)
- [GitHub REST API Docs](https://docs.github.com/en/rest)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Remember: ⭐ Star the repository before submitting PRs!**

Happy coding! 🎉