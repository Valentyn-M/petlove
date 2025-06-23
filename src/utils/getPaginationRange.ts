export const getPaginationRange = (
  totalPages: number,
  currentPage: number,
  maxVisiblePages: number
): (number | string)[] => {
  const left = Math.max(currentPage - 1, 1);
  const right = Math.min(currentPage + 1, totalPages);

  const showLeftDots = left > 2;
  const showRightDots = right < totalPages - 1;

  const firstPage = 1;
  const lastPage = totalPages;

  if (!showLeftDots && showRightDots) {
    const visiblePages = Array.from({ length: maxVisiblePages }, (_, i) => i + 1);
    return maxVisiblePages <= 3 ? [...visiblePages, '...'] : [...visiblePages, '...', lastPage];
  }

  if (showLeftDots && !showRightDots) {
    const start = Math.max(totalPages - maxVisiblePages + 1, 1);
    const visiblePages = Array.from({ length: maxVisiblePages }, (_, i) => start + i);
    return maxVisiblePages <= 3 ? ['...', ...visiblePages] : [firstPage, '...', ...visiblePages];
  }

  if (showLeftDots && showRightDots) {
    const middle = Array.from(
      { length: maxVisiblePages },
      (_, i) => currentPage - Math.floor(maxVisiblePages / 2) + i
    ).filter((p) => p > 1 && p < totalPages);

    return maxVisiblePages <= 3 ? ['...', ...middle, '...'] : [firstPage, '...', ...middle, '...', lastPage];
  }

  return Array.from({ length: totalPages }, (_, i) => i + 1);
};
