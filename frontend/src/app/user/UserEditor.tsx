import React from "react";
import { Form, Button, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import { observer } from "mobx-react";
import { FormattedMessage } from "react-intl";
import {
  createUseAntdForm,
  createUseAntdFormValidation,
  RetryDialog,
  Field,
  GlobalErrorsAlert,
  Spinner,
  useMasterDetailEditor,
  useCreateAntdResetForm,
  useEntityPersistCallbacks,
  useSubmitFailedCallback,
  ant_to_jmixFront,
  useChangeConfirm
} from "@haulmont/jmix-react-antd";
import {
  createAntdFormValidationMessages,
  EntityEditorProps
} from "@haulmont/jmix-react-web";
import { gql } from "@apollo/client";
import { User } from "../../jmix/entities/User";

const ENTITY_NAME = "User";
const ROUTING_PATH = "/userMasterDetail";

const LOAD_USER = gql`
  query UserById($id: String = "", $loadItem: Boolean!) {
    UserById(id: $id) @include(if: $loadItem) {
      _instanceName
      active
      email
      firstName
      id
      lastName
      password
      timeZoneId
      username
      version
    }
  }
`;

const UPSERT_USER = gql`
  mutation Upsert_User($user: inp_User!) {
    upsert_User(user: $user) {
      id
    }
  }
`;

const UserEditor = observer((props: EntityEditorProps<User>) => {
  const {
    onCommit,
    entityInstance,
    submitBtnCaption = "common.submit"
  } = props;
  const [form] = useForm();
  const onSubmitFailed = useSubmitFailedCallback();
  const { setDirty } = useChangeConfirm();

  const fieldComponentProps = {
    onBlur: setDirty
  };

  const {
    executeLoadQuery,
    loadQueryResult: { loading: queryLoading, error: queryError },
    upsertMutationResult: { loading: upsertLoading },
    serverValidationErrors,
    intl,
    handleSubmit,
    handleCancelBtnClick
  } = useMasterDetailEditor<User>({
    loadQuery: LOAD_USER,
    upsertMutation: UPSERT_USER,
    entityName: ENTITY_NAME,
    routingPath: ROUTING_PATH,
    onCommit,
    entityInstance,
    useEntityEditorForm: createUseAntdForm(form),
    useEntityEditorFormValidation: createUseAntdFormValidation(form),
    resetEntityEditorForm: useCreateAntdResetForm(form),
    persistEntityCallbacks: useEntityPersistCallbacks(),
    uiKit_to_jmixFront: ant_to_jmixFront
  });

  if (queryLoading) {
    return <Spinner />;
  }

  if (queryError != null) {
    console.error(queryError);
    return <RetryDialog onRetry={executeLoadQuery} />;
  }

  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={onSubmitFailed}
      layout="vertical"
      form={form}
      validateMessages={createAntdFormValidationMessages(intl)}
    >
      <Field
        entityName={ENTITY_NAME}
        propertyName="active"
        formItemProps={{
          style: { marginBottom: "12px" },
          valuePropName: "checked"
        }}
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="email"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="firstName"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="lastName"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="password"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="timeZoneId"
        formItemProps={{
          style: { marginBottom: "12px" }
        }}
        componentProps={fieldComponentProps}
      />

      <Field
        entityName={ENTITY_NAME}
        propertyName="username"
        formItemProps={{
          style: { marginBottom: "12px" },
          rules: [{ required: true }]
        }}
        componentProps={fieldComponentProps}
      />

      <GlobalErrorsAlert serverValidationErrors={serverValidationErrors} />

      <Form.Item style={{ textAlign: "center" }}>
        <Space size={8}>
          <Button htmlType="button" onClick={handleCancelBtnClick}>
            <FormattedMessage id="common.cancel" />
          </Button>
          <Button type="primary" htmlType="submit" loading={upsertLoading}>
            <FormattedMessage id={submitBtnCaption} />
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
});

export default UserEditor;
