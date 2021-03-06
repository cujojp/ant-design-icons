// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined';

export default {
  name: 'IconSwapLeftOutlined',
  displayName: 'SwapLeftOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SwapLeftOutlinedSvg } },
      children,
    ),
};