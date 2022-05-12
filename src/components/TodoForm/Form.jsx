import { Formik, Form, Field } from 'formik';

export const TodoForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ title: '', text: '', isCompleted: '' }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Title</label>
          <Field name="title"></Field>
          <label>Text</label>
          <Field name="text"></Field>
          <label>isCompleted</label>
          <Field type="checkbox" name="isCompleted" />

          <button type="submit" disabled={isSubmitting}>
            Add todo
          </button>
        </Form>
      )}
    </Formik>
  );
};
