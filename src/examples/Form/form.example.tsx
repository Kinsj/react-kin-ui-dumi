import { Button, Form, Validator } from 'react-kin-ui';
import React, { useState } from 'react';
import { FormValue } from 'gulu-kin/dist/form/form';

export default () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});


  const fields = [
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ];

  const validatorRules = [
    { key: 'username', required: true },
    { key: 'username', maxLength: 16 },
    { key: 'username', minLength: 6 },
    { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
    { key: 'password', required: true },
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = () => {
    const errors = Validator(formData, validatorRules);
    setErrors(errors);

    if (Validator.noError(errors)) {
      // do something...
    }
  };

  return (
    <div className="gulu-form-example">
      <Form value={formData} fields={fields}
            buttons={
              <>
                <Button type="submit" level="important">提交</Button>
                <Button style={{marginLeft: '1em'}}>取消</Button>
              </>
            }
            errors={errors}
            onSubmit={handleSubmit}
            onChange={setFormData}
      />
    </div>
  );
};
