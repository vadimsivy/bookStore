import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styles from "./tabs.module.scss"

const TabGallery = ({...rest}) => (
  <Tabs>
    <TabList className={styles.container}>
      <Tab className={styles.container__tab}>Description</Tab>
      <Tab className={styles.container__tab}>Authors</Tab>
      <Tab className={styles.container__tab}>Reviews</Tab>
    </TabList>


    <TabPanel className={styles.container__desc}>
      <h2>{rest.desc}</h2>
    </TabPanel>
    <TabPanel className={styles.container__desc}>
      <h2>{rest.authors}</h2>
    </TabPanel>
    <TabPanel className={styles.container__desc}>
      <h2>{rest.publisher}</h2>
    </TabPanel>
  </Tabs>
)

export default TabGallery