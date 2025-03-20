import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../components/ui/pagination";

interface PaginationDemoProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationDemo({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationDemoProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={handlePrevious}
            className={currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}
            aria-disabled={currentPage === 1 ? "true" : "false"}
          />
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={() => onPageChange(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 3 && currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={handleNext}
            className={
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            }
            aria-disabled={currentPage === totalPages ? "true" : "false"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
