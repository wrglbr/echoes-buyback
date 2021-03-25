import axios from "axios";
export const buyback = {
  created() {
    this.fetchData();
  },
  data: () => ({
    items: [],
    headers: [],
    records: null,
    COLUMNS: 2,
    sheetPageNumber: 2,
    SHEETID: "1mP6PWr-JwsRX0r8gWNi-vkivQkAcqF9goxSCCqByfHA",
    RANGE: "I4:J36"
  }),
  computed: {
    getURL() {
      return (
        "https://spreadsheets.google.com/feeds/cells/" +
        this.SHEETID +
        "/" +
        this.sheetPageNumber +
        "/public/full?alt=json&range=" +
        this.RANGE
      );
    }
  },
  methods: {
    async fetchData() {
      // eslint-disable-next-line no-unused-vars
      const data = await axios
        .get(this.getURL)
        .then((response) => {
          const entry = response.data.feed.entry;
          this.records = entry.length / this.COLUMNS - 1;
          for (let i = 0; i < this.COLUMNS; i++) {
            this.headers.push(entry[i].content.$t);
          }
          for (
            let i = this.headers.length;
            i < entry.length;
            i += this.COLUMNS
          ) {
            const item = {};
            for (let j = 0; j < this.headers.length; j++) {
              // entry[i].content.$t retrieves the content of each cell
              item[this.headers[j]] = entry[i + j].content.$t;
            }
            this.items.push(item);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    parseData(items) {
      var itemList = [];
    }
  }
};
