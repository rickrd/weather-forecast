import React from 'react'
import styled from 'styled-components'

const DescriptionWrapper = styled.div`
  color: #fff;
`

const Description = () => {
  return (
    <DescriptionWrapper>
      <h2>
        This is a Weather Forecast app. It uses the current user's address (and convert it to
        coordinates using Google Maps API) or the actual coordinates from the browser to consult the
        Open Weather API and show information about the weather.
      </h2>
    </DescriptionWrapper>
  )
}

export default Description
