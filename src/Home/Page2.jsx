import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">JGPlayer 符合Sounclod Api標準</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">任何可以播SoundCloud的客戶端都可以播放。</p>
          <p className="main-info" key="2">點我觀看教學。</p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
