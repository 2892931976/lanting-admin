import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { List, Card, Row, Col, Radio, Input, Button, Icon, Dropdown, Menu, Avatar } from 'antd';

import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

import styles from './Links.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

const title = '友情链接';

const logo = (
  <i className="iconfont header-icon icon-links" />
);

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
export default class Links extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 5,
      },
    });
  }

  render() {
    const { list: { list }, loading } = this.props;

    const description = (
      <div className={styles.pageHeaderContent}>
        <p>
          管理或修改您的友情链接等信息，以下是你的友情链接信息。
        </p>
      </div>
    );

    // eslint-disable-next-line no-shadow
    const Info = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="all">全部</RadioButton>
          <RadioButton value="progress">内链</RadioButton>
          <RadioButton value="waiting">外链</RadioButton>
        </RadioGroup>
        <Search
          className={styles.extraContentSearch}
          placeholder="请输入网址或名称"
          onSearch={() => ({})}
        />
      </div>
    );

    const ListContent = ({ data: { owner, createdAt } }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>创建人</span>
          <p>{owner}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>创建时间</span>
          <p>{moment(createdAt).format('YYYY-MM-DD')}</p>
        </div>
      </div>
    );

    const menu = (
      <Menu>
        <Menu.Item>
          <a>编辑</a>
        </Menu.Item>
        <Menu.Item>
          <a>删除</a>
        </Menu.Item>
      </Menu>
    );

    const MoreBtn = () => (
      <Dropdown overlay={menu}>
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );

    return (
      <PageHeaderLayout
        title={title}
        logo={logo}
        content={description}
      >
        <div className={styles.standardList}>
          <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info title="全部链接" value="8 个" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="内部链接" value="6 个" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="外部链接" value="24 个" />
              </Col>
            </Row>
          </Card>

          <Card
            className={styles.listCard}
            bordered={false}
            title={title}
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
            extra={extraContent}
          >
            <Button type="dashed" style={{ width: '100%', marginBottom: 8 }} icon="plus">
              添加
            </Button>
            <List
              size="large"
              rowKey="id"
              loading={loading}
              dataSource={list}
              renderItem={item => (
                <List.Item
                  actions={[<a>查看</a>, <MoreBtn />]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.logo} shape="square" size="large" />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.subDescription}
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageHeaderLayout>
    );
  }
}
