// Packages
import moment from 'moment'

// Components
import Link from '../components/link'
import {UL, LI} from '../components/list'
import Title from '../components/title'

// Data
import posts from '../data/posts'

const parseDate = date => moment(date, 'DD-MM-YYYY')

// Assign a URL to each post and
// sort them by date (most recent one first)
const preparePosts = () => posts.map(post => Object.assign({
  url: `/${parseDate(post.date).year()}/${post.id}`
}, post)).sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

export default () => (
  <div>
    <Title/>

    <div>Heyho!</div>

    <UL>
      {
        preparePosts().map(post => (
          <LI key={post.id}>
            <Link href={post.url}>{post.title}</Link>
          </LI>
        ))
      }
    </UL>
  </div>
)
