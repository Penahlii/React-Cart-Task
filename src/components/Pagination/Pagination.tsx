import React from "react";
import { PaginationContainer, PageButton } from "./Pagination.styles";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    navigate({ search: searchParams.toString() });
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          active={index + 1 === currentPage}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
