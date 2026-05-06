import type { UserCardProgress } from "../types/progress";

const PROGRESS_KEY = "flashmeds.progress.v1";

function readAllProgress(): UserCardProgress[] {
  const stored = localStorage.getItem(PROGRESS_KEY);

  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored) as UserCardProgress[];
  } catch {
    localStorage.removeItem(PROGRESS_KEY);
    return [];
  }
}

function writeAllProgress(progress: UserCardProgress[]): void {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function getUserProgress(userId: string): UserCardProgress[] {
  return readAllProgress().filter((progress) => progress.userId === userId);
}

export function saveUserCardProgress(updatedProgress: UserCardProgress): UserCardProgress[] {
  const allProgress = readAllProgress();
  const exists = allProgress.some((progress) => progress.id === updatedProgress.id);
  const nextProgress = exists
    ? allProgress.map((progress) =>
        progress.id === updatedProgress.id ? updatedProgress : progress,
      )
    : [...allProgress, updatedProgress];

  writeAllProgress(nextProgress);
  return getUserProgress(updatedProgress.userId);
}
