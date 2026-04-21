# GENERAL AGENT RULES

## TOKEN EFFICIENCY
- Output diffs only. Use `// ... existing code ...` for unchanged sections.
- Skip imports, boilerplate, and obvious logic explanations.
- Compress prompts: use shorthand (req, impl, ctx, fn), batch related tasks.
- Cap responses at 300 words unless architecting or debugging.
- Never repeat system rules already loaded in context.
- No docstrings or obvious comments. Code must be self-explanatory. Use comments *only* to explain complex business "why", not "what".
- Output only the code or the minimal required response. Do not repeat the user's question.
- Use early returns, guard clauses, and flat logic to reduce token count.
- When modifying a file, output the whole file only if under 200 lines. Otherwise, output only the changed sections with `// ... existing code ...` markers.
- Keep components/files dense but readable. No unnecessary whitespace or verbose formatting.

## MCP & TOOL USAGE
- Hierarchy: grep/filesystem → context7 → github. Never chain without hard dependency.
- Plan First, Execute Second: Form a clear plan of what you need, which tool to use, and exact parameters before invoking.
- Limit to one tool call per information need. Combine queries with patterns/filters.
- Verify Capabilities: Do not hallucinate features. Only use parameters explicitly stated in the tool's description.
- Cache results in session memory. Never re-fetch identical documentation.
- Chain Efficiently: Process large tool results before passing to another tool. Never blindly pipe massive outputs.
- Graceful Degradation: If a tool fails, fall back to standard file operations and report the error.
- Restrict to read-only unless write explicitly approved. Never expose raw tool responses to the user.

## SKILL & AGENT ROUTING
- Load skills via trigger matching or explicit `@skill-name`. Never auto-load all definitions.
- Cap concurrent active skills at 2. Max 1000 tokens per skill injection.
- Unload skill context after execution. Reset to base rules for next turn.
- Skills enforce output format (diff/json/markdown). Primary agent aggregates results.
- If a task can be done without a skill, skip the skill to save tokens.

## VERSION CONTROL (GIT)
- Format: `<type>(<scope>): <subject>`. Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
- Atomic Commits: One logical change per commit. Do not mix unrelated changes.
- No Secrets: NEVER stage `.env`, API keys, tokens, or credentials. Always verify git diff.
- Respect History: No force pushes to shared branches. Do not rewrite public history.
- Do not generate git commands unless explicitly asked.

## CODE QUALITY & ARCHITECTURE
- YAGNI > over-engineering. KISS > clever. Refactor only when duplicated 3+ times (DRY).
- Strict Typing: No `any`, `dynamic`, or `Object` unless absolutely unavoidable. Use language-specific strict type narrowing.
- Single Responsibility: Max 25 lines per function. Early returns over nested conditionals.
- Prefer composition over inheritance. Use explicit dependency injection.
- Explicit return types on exported functions. Let compiler infer locals.
- Meaningful names: verb-noun for functions, full words (no abbreviations), PascalCase types, kebab-case files.
- Feature-first structure. Co-locate tests with source. One primary export per file.
- Follow the Leader: Adhere strictly to existing project patterns. Do not introduce new paradigms unless asked.
- Minimal Diff: Solve the problem with the least amount of code changes possible. No collateral refactoring.

## SECURITY & VALIDATION
- Fail-fast on invalid state. Never swallow or hide errors.
- Boundary Validation: Sanitize inputs at the boundary. Escape outputs. Assume all external data (API, env, user) is malicious.
- Never hardcode secrets. Use environment variables + runtime validation at startup.
- Restrict file access to project scope. Prevent path traversal.
- No Security Shortcuts: Never suggest disabling SSL, bypassing CORS, or lowering standards to "make it locally".

## WORKFLOW & APPROVAL
- Plan → Spec → Impl → Verify. Output file tree before coding.
- Wait for explicit "Proceed" before writing code, modifying files, or running commands.
- No automated tests per project constraints. Provide manual verification steps instead.

## ERROR HANDLING & DEBUGGING
- Propagate errors to explicit boundaries. Never use empty catch blocks.
- User-friendly message + detailed stack trace in development mode.
- Use structured error types with codes and context.
- Evidence-based debugging: reproduce → isolate → verify → propose → test. Never guess.

## STATE & FILE MANAGEMENT
- Treat files as single source of truth. Delete dead code immediately.
- No `// TODO` without associated timeline or issue reference.
- Update type definitions/interfaces before implementation, not after.

## RESPONSE FORMAT
- When creating or updating files, output the file path followed by the code block.
- Separate multiple files with `---`.
- No explanatory text outside code blocks unless the user asks for it.

---

# REPOSITORY-SPECIFIC GUIDANCE (LogiTrack - Flutter)

## Project Overview
LogiTrack is a Flutter application for courier management and real-time geofence tracking. It uses a Clean Architecture with BLoC for state management and GetIt for dependency injection.

## Architecture
- **Clean Architecture:** Strict separation of `Presentation`, `Domain`, and `Data` layers following SOLID principles.
- **State Management:** Primarily uses BLoC pattern for complex UI states.
- **Dependency Injection:** Uses `GetIt` for service location.
- **Dependency Rule:** Source code dependencies point inward (Presentation -> Domain, Data -> Domain, Domain has no outer dependencies).

## Key Commands
- **Install Dependencies:** `flutter pub get`
- **Run Application:** `flutter run`
- **Run Tests:** `flutter test`
- **Run Linting/Analysis:** `flutter analyze`
- **Code Generation:** `flutter pub run build_runner build --delete-conflicting-outputs` (Required for `json_serializable` and `injectable`).

## Setup & Environment
- **Firebase Configuration:** Requires `google-services.json` (Android) and `GoogleService-Info.plist` (iOS).
- **Google Maps API Key:** Must be configured in `android/app/src/main/AndroidManifest.xml` and `ios/Runner/AppDelegate.swift`.

## Code Generation
This project utilizes code generation for:
-   **JSON Serialization:** `json_serializable` for converting JSON to Dart objects and vice-versa.
-   **Dependency Injection:** `injectable` (with `GetIt`) for generating boilerplate for dependency injection.
Always run `flutter pub run build_runner build --delete-conflicting-outputs` after making changes to models or injectable modules.

## Testing
-   **Frameworks:** Uses `flutter_test` for widget and unit tests, `mocktail` for mocking, and `bloc_test` for BLoC specific testing.
-   **Location:** Tests are typically co-located with the source code in a `test` directory within each feature module.

## File Structure
The `lib` directory follows a feature-based structure with Clean Architecture layers:
```
lib/
├── core/                      # Shared utilities, constants, themes
├── features/                  # Feature-based modules
│   └── [feature_name]/
│       ├── data/             # Repositories, data sources, models
│       ├── domain/           # Entities, use cases, repository interfaces
│       └── presentation/     # BLoCs, UI, widgets
├── injection_container.dart  # GetIt dependency injection setup
└── main.dart
```
