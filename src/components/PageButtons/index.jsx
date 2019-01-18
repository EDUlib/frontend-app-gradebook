import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';


export default function PageButtons({
  prevPage, nextPage, selectedTrack, selectedCohort, getPrevNextGrades,
}) {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ paddingBottom: '20px' }}
    >
      <Button
        label="Previous Page"
        style={{ margin: '20px' }}
        buttonType="primary"
        disabled={!prevPage}
        onClick={() => getPrevNextGrades(prevPage, selectedCohort, selectedTrack)}
      />
      <Button
        label="Next Page"
        style={{ margin: '20px' }}
        buttonType="primary"
        disabled={!nextPage}
        onClick={() => getPrevNextGrades(nextPage, selectedCohort, selectedTrack)}
      />
    </div>
  );
}

PageButtons.defaultProps = {
  nextPage: '',
  prevPage: '',
  selectedCohort: null,
  selectedTrack: null,
};

PageButtons.propTypes = {
  getPrevNextGrades: PropTypes.func.isRequired,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  selectedCohort: PropTypes.shape({
    name: PropTypes.string,
  }),
  selectedTrack: PropTypes.shape({
    name: PropTypes.string,
  }),
};

