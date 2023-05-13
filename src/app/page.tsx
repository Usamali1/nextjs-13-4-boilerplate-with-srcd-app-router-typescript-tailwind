import React from 'react'
import { NextPage } from 'next'
import { NextPageContext } from 'next'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

export function createPage<T extends PageContext>(page: NextPage<T>): Page<T> {
  // Function implementation
}

const AboutPage: NextPage = () => {
  
};

export const aboutPage = createPage({AboutPage});

