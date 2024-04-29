import sgMail, { MailDataRequired } from "@sendgrid/mail";

type Props = {
  to: string;
  templateName: "ContactSubmission";
  dynamicTemplateData?: Record<string, string>;
};

export const sendEmail = async ({
  to,
  templateName,
  dynamicTemplateData,
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg: MailDataRequired = {
    from: {
      email: "donotreply@thisisademobroski.mom",
      name: "This is a Demo Broski",
    },
    to,
    templateId: templates[templateName],
    dynamicTemplateData,
  };

  const data = await sgMail.send(msg);
  const statusCode = data[0].statusCode;

  if (statusCode.toString()[0] !== "2") throw new Error("Failed to send email");
};

const templates = {
  ContactSubmission: "d-f0b47f1217d7419b9d694f3fb7b7c595",
};
