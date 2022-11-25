import Head from 'next/head'
import { FormSection } from '@/components/pages/login/FormSection'
import { api } from '@/services/api'

type Props = {
  isFirstAccess: boolean
}

const Login = (props: Props) => {
  return (
    <>
      <Head>
        <title>Farmy | Login</title>
      </Head>
      <FormSection isFirstAccess={props.isFirstAccess} />
    </>
  )
}

export default Login

export const getServerSideProps = async () => {
  const { data } = await api.get('/is-first-access')

  return {
    props: {
      isFirstAccess: data.is_first_access
    }
  }
}
