import React from 'react';
import { Button, Modal, Form, Message } from 'semantic-ui-react';
import { InputField } from '../../../components/Fields';
import { required } from '../../../helpers/formValidators';

const BidModal = props => {
  const { open, close, handleSubmit, loan } = props;
  return (
    <Modal size="tiny" dimmer="blurring" open={open} onClose={close}>
      <Modal.Header>Bid</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Message info visible>Max bid amount: {loan.maxBidAmount}</Message>
          {props.error && (
            <Message
              error
              visible={props.submitFailed}
              header="Sumbit Failed"
              content={props.error}
            />
          )}

          <InputField type="number" name="amount" label="Abount" validate={[required]} required />
          <Button color="green" type="submit" >Submit</Button>

        </Form>

      </Modal.Content>
    </Modal>
  )
}


export default BidModal; 