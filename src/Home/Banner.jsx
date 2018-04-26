import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button, Input, Icon } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from './BannerImage';
import { assets } from './data';

class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }

  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              <img width="100%" src={`${assets}/image/home/intro-landscape-3a409.svg`} alt="" />
              :
              <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 key="h1">音樂，放鬆你我</h1>
            <p className="main-info" key="p">
              JGPlayer是一套免費的音樂播放軟體。
            </p>
            <Button type="primary" loading={this.state.isLoading} onClick={ () =>     this.setState({
              isLoading: true
            })}>
              取得我的免費授權碼
            </Button>
            <div style={{ marginBottom: 16 , marginTop: 16}} hidden={!this.state.isLoading}>
              <Input addonAfter={<Icon type="setting" />} defaultValue="token" />
            </div>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
