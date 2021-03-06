import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import Address from './steps/Address'
import SocialLinks from './steps/SocialLinks'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'
import { FileText, User, MapPin, Link } from 'react-feather'

const WizardModern = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'create-account',
      title: 'Create Account',
      // subtitle: 'Create Your Account Details.',
      icon: <FileText size={18} />,
      content: <AccountDetails stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'licensure-Conformation',
      title: 'Licensure Confirmation',
      // subtitle: 'Add License Info',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'goals',
      title: 'Goals',
      // subtitle: 'Add Goals',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='wizard-modern' />
    }
  ]

  return (
    <div className='modern-horizontal-wizard'>
      <Wizard
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModern
