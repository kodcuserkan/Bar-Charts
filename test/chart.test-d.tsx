import { expectError } from 'tsd';
import React from 'react';
import { Plugin } from 'chart.js';
import Chart, { Scatter, Doughnut } from '../src';
import { multiTypeData } from '../stories/Chart.data';

const data = {
  datasets: [],
};

/**
 * Should check type-specific props
 */

<Chart type='radar' data={data} plugins={[] as Plugin<'radar'>[]} />;
<Scatter data={data} plugins={[] as Plugin<'scatter'>[]} />;
<Chart type='bar' data={multiTypeData} />;
<Chart type='scatter' data={data} plugins={[] as Plugin<'bar'>[]} />;

expectError(<Scatter data={data} plugins={[] as Plugin<'bar'>[]} />);

/**
 * Should check type-specific options
 */

<Doughnut
  data={data}
  options={{
    cutout: '75%',
  }}
/>;

expectError(
  <Scatter
    data={data}
    options={{
      cutout: '75%',
    }}
  />
);
