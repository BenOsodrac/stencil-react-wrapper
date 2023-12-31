import { OsuiButton, OsuiCard } from 'core-components-react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { alignment, border } from '../../../globalEnum';
import './../styles.scss';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();


export function App() {
  return (
    <div style={{ width: '300px' }}>
      <OsuiCard
        alignment={alignment.vertical} reverse-column={false} border={border.rounded} background-color={"#fff"} show-header={true}>
        <img height="+250px" width="100%" slot="content" src="https://outsystemsui.outsystems.com/OutSystemsUIWebsite/img/StyleGuidePreviewAssets.PatternPreviewPhoto10.png" alt="" />
        <OsuiButton slot="footer">I'm a Custom Ionic Button</OsuiButton>
      </OsuiCard>
    </div>
  );
}

export default App;