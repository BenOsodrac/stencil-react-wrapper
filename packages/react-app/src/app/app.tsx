import { OsuiButton, OsuiCard } from 'core-components-react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { alignment, border } from '../../../core-components/src/globalEnum';
import './../styles.scss';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();


export function App() {
  return (
    <div style={{ width: '300px' }}>
      <OsuiCard
        alignment={alignment.vertical} reversecolumn={false} border={border.rounded} backgroundcolor={"#fff"} showheader={true}>
        <p slot="header">Custom Stencil Component</p>
        <img height="+250px" width="100%" slot="content" src="https://outsystemsui.outsystems.com/OutSystemsUIWebsite/img/StyleGuidePreviewAssets.PatternPreviewPhoto10.png" alt="" />
        <OsuiButton slot="footer"></OsuiButton>
      </OsuiCard>
    </div>
  );
}

export default App;