import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Forward Operations Agent</title>
          <meta
            property="og:title"
            content="test-page - Forward Operations Agent"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_8rdeo8) => (
            <>
              <h1>{context_8rdeo8?.Name}</h1>
            </>
          )}
          initialData={props.context8rdeo8Prop}
          persistDataDuringLoading={true}
          key={props?.context8rdeo8Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context8rdeo8Prop = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context8rdeo8Prop: context8rdeo8Prop?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
