// Native
import Link from 'next/prefetch'

export default ({to, closer}) => (
  <div className={closer && 'closer'}>
    <Link href={to}>
      <a>&#8617;&#xFE0E;</a>
    </Link>

    <style jsx>{`
      div {
        position: absolute;
        right: 30px;
        top: 40px;
        height: 37px;
        width: 37px;
      }

      a {
        font-size: 19px;
        text-align: center;
        background: #efefef;
        font-weight: bold;
        box-sizing: border-box;
        color: #000;
        height: inherit;
        display: block;
        width: inherit;
        line-height: 44px;
        border-radius: 100%;
        font-family: 'Courier New', serif;
        text-decoration: none;
      }

      .closer {
        right: 15px;
        top: 15px;
      }

      .closer a {
        background: #fff;
      }

      @media (min-width: 768px) {
        div {
          width: 50px;
          height: 50px;
        }

        a {
          transition: all .2s;
          font-size: 20px;
          line-height: 56px;
        }

        a:hover {
          background: #e3e3e3;
        }
      }
    `}</style>
  </div>
)
