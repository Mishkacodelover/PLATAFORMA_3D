import { jwtVerify } from "jose";

const textEncoder = async () => {
  const encoder = new TextEncoder();

  const { payload } = await jwtVerify(
    authorization,
    encoder.encode(process.env.JWT_SECRET)
  );
  if (payload.role > 0)
    return res.status(409).send("no tiene permiso de administrador");
};

export default textEncoder;
