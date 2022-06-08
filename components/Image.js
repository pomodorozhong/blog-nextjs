import NextImage from 'next/image'

const Image = ({ ...rest }) => (
  <div className="flex">
    <div className="m-auto">
      <NextImage {...rest} />
    </div>
  </div>
)

export default Image
