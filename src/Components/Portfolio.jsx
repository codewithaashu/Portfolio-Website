import { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { gql } from 'graphql-request';
import GraphClient from '../lib/GraphClient';
import Loader from './Loader';

const ITEMS_PER_PAGE = 8;

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const query = gql`
      {
        projects {
          title
          technlogies
          role
          liveUrl
          githubUrl
          images {
            url
          }
          description {
            raw
          }
          createdDate
          category
        }
      }
    `;
    const fetchData = async () => {
      const { projects } = await GraphClient(query);
      setProjects(projects);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  const getPaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          '...',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };
  if (!projects) return <Loader />;
  return (
    <div className='portfolio-main-div'>
      <div className='container' style={{ paddingBottom: '2rem' }}>
        <div className='row pt-5'>
          <p className='services-p' style={{ marginTop: '0px' }}>
            My Portfolio
          </p>
          <h1 className='portfolio-h1' style={{ paddingBottom: '30px' }}>
            Recent Works
          </h1>
        </div>

        <div
          className='row portfolio-main-card-box mt-4'
          style={{ paddingBottom: '2rem', transition: 'all 0.4s ease-in-out' }}
        >
          {currentProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              img={project?.images?.[0]?.url}
              subHeading={project?.role}
              heading={project?.title}
              popHeading={project?.title}
              content={project?.description?.raw}
              created={project?.createdDate}
              tech={project?.technlogies}
              role={project?.role}
              view={project?.liveUrl}
              github={project?.githubUrl}
            />
          ))}
        </div>

        <div className='pagination-container'>
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className='pagination-arrow'
            >
              &laquo;
            </button>
          )}

          {getPaginationNumbers().map((page, idx) => (
            <button
              key={idx}
              className={`pagination-number ${
                currentPage === page ? 'active' : ''
              } ${page === '...' ? 'dots' : ''}`}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
            >
              {page}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className='pagination-arrow'
            >
              &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
