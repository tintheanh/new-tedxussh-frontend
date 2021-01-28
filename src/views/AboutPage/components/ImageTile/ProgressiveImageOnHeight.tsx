import React from 'react';
import sizeMe from 'react-sizeme';
import { ProgressiveImage } from '../../../../components';

function ProgressiveImageOnHeight(props: any) {
  return (
    <div>
      <ProgressiveImage {...props} />
    </div>
  );
}

export default sizeMe({ monitorHeight: true })(ProgressiveImageOnHeight);
