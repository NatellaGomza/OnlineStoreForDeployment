import React from 'react';

import Company from '../components/Company';

function Page_Company() {
  const companyDescription = require('../about.json')

  return (
    <Company header={companyDescription.header}
      text={companyDescription.description} />
  );
}

export default Page_Company;