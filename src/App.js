import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Table from './component/Table';

const App = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  //*************** code for taking the data from an api ****************** 

  // const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   fetch('API_TO_FETCH_THE_DATA')
  //     .then(response => response.json())
  //     .then(data => setAllData(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  //************************************************************************/

  const columns = [
    // Your column definitions here
    { field: 'CCLtStatus', sortable: true, filter: true },
    { field: 'counterpartName', sortable: true, filter: true },
    { field: 'SDSId', sortable: true, filter: true },
    { field: 'marketTier', sortable: true, filter: true },
    { field: 'LEI', sortable: true, filter: true },
    { field: 'reporting', sortable: true, filter: true }
  ];

  const allData = [
    // Your data here
    { CCLtStatus: 'status1', counterpartName: 'counterpart1', SDSId: 'id1', marketTier: 'tier1', LEI: 'lei1', reporting: 'reporting1', tableType: 'type1' },
  { CCLtStatus: 'status2', counterpartName: 'counterpart2', SDSId: 'id2', marketTier: 'tier2', LEI: 'lei2', reporting: 'reporting2', tableType: 'type2' },
  { CCLtStatus: 'status3', counterpartName: 'counterpart3', SDSId: 'id3', marketTier: 'tier3', LEI: 'lei3', reporting: 'reporting3', tableType: 'type1' },
  { CCLtStatus: 'status4', counterpartName: 'counterpart4', SDSId: 'id4', marketTier: 'tier4', LEI: 'lei4', reporting: 'reporting4', tableType: 'type2' },
  { CCLtStatus: 'status5', counterpartName: 'counterpart5', SDSId: 'id5', marketTier: 'tier5', LEI: 'lei5', reporting: 'reporting5', tableType: 'type1' },
  { CCLtStatus: 'status6', counterpartName: 'counterpart6', SDSId: 'id6', marketTier: 'tier6', LEI: 'lei6', reporting: 'reporting6', tableType: 'type2' },
  { CCLtStatus: 'status7', counterpartName: 'counterpart7', SDSId: 'id7', marketTier: 'tier7', LEI: 'lei7', reporting: 'reporting7', tableType: 'type1' },
  { CCLtStatus: 'status8', counterpartName: 'counterpart8', SDSId: 'id8', marketTier: 'tier8', LEI: 'lei8', reporting: 'reporting8', tableType: 'type2' },
  { CCLtStatus: 'status9', counterpartName: 'counterpart9', SDSId: 'id9', marketTier: 'tier9', LEI: 'lei9', reporting: 'reporting9', tableType: 'type1' },
  { CCLtStatus: 'status10', counterpartName: 'counterpart10', SDSId: 'id10', marketTier: 'tier10', LEI: 'lei10', reporting: 'reporting10', tableType: 'type2' },
  ];

  const redData = allData.filter(row => row.tableType === 'type1');
  const greenData = allData.filter(row => row.tableType !== 'type1');

  return (
    <>
      <h1>Hello there</h1>
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab label="All" style={currentTab === 0 ? { backgroundColor: 'grey' } : {}} />
        <Tab label="Red" style={currentTab === 1 ? { backgroundColor: 'red' } : {}} />
        <Tab label="Green" style={currentTab === 2 ? { backgroundColor: 'green' } : {}} />
      </Tabs>
      {currentTab === 0 && <Table columns={columns} data={allData} />}
      {currentTab === 1 && <Table columns={columns} data={redData} />}
      {currentTab === 2 && <Table columns={columns} data={greenData} />}
    </>
  );
};

export default App;