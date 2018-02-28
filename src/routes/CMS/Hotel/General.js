import React, { Component } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';
import { connect } from 'dva';
import { Button, Row, Col, Card, Divider } from 'antd';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import DescriptionList from '../../../components/DescriptionList';
import styles from './Address.less';

const { Description } = DescriptionList;

const title = '酒店简介';

const logo = (
  <i className="iconfont header-icon icon-hotel" />
);

const action = (
  <div>
    <Button>预览</Button>
    <Button type="primary">发布</Button>
  </div>
);

const extra = (
  <Row>
    <Col xs={24} sm={12}>
      <div className={styles.textSecondary}>状态</div>
      <div className={styles.heading}>已发布</div>
    </Col>
    <Col xs={24} sm={12}>
      <div className={styles.textSecondary}>最后更新</div>
      <div className={styles.heading}>1 分钟前</div>
    </Col>
  </Row>
);

const description = (
  <DescriptionList className={styles.headerList} size="small" col="2">
    <Description term="创建人">王小义</Description>
    <Description term="公开度"><a href="">公开</a></Description>
    <Description term="创建时间">2017-07-07</Description>
    <Description term="修订版本"><a href="">5</a> 条</Description>
  </DescriptionList>
);

const tabList = [{
  key: 'simplified',
  tab: '简体中文',
}, {
  key: 'english',
  tab: '英文',
}, {
  key: 'traditional',
  tab: '繁体中文',
}];

const editorProps = {
  viewWrapper: '.editor',
  controls: [
    'undo', 'redo',
    'split', 'font-size', 'font-family', 'text-color',
    'bold', 'italic', 'superscript', 'subscript', 'emoji', 'text-align', 'split',
    'headings', 'list_ul', 'list_ol', 'blockquote', 'split',
    'link', 'split', 'media',
  ],
};

const contentDesc = (
  <div className={styles.desc}>
    <h3>说明</h3>
    <h4>设置酒店概况信息</h4>
    <p>管理或修改您的酒店名称、介绍等信息。</p>
  </div>
);

@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchAdvanced'],
}))

export default class General extends Component {
  state = {
    tabActiveKey: 'simplified',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetchAdvanced',
    });
  }

  onTabChange = (key) => {
    this.setState({ tabActiveKey: key });
  };

  render() {
    const contentList = {
      simplified: <div className="editor"><BraftEditor {...editorProps} /></div>,
      english: <div className="editor"><BraftEditor {...editorProps} /></div>,
      traditional: <div className="editor"><BraftEditor {...editorProps} /></div>,
    };

    return (
      <PageHeaderLayout
        title={title}
        logo={logo}
        action={action}
        content={description}
        extraContent={extra}
      >
        <Card
          className={styles.tabsCard}
          bordered={false}
          tabList={tabList}
          onTabChange={this.onTabChange}
        >
          {contentList[this.state.tabActiveKey]}
          <Divider style={{ margin: '40px 0 24px' }} />
          {contentDesc}
        </Card>
      </PageHeaderLayout>
    );
  }
}
