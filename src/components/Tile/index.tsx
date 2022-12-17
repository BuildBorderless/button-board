import { Grid, Link, Paper, Typography } from "@mui/material"

interface TileProps {
    title?: string
    value?: string | number
    subtitle?: string
    linkTitle?: string
    linkHref?: string
}

export const Tile = ({
    title,
    value,
    subtitle,
    linkHref,
    linkTitle,
}: TileProps) => {
    return (
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    height: 240,
                }}
            >
                <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                >
                    {title ?? ""}
                </Typography>
                <Typography component="p" variant="h4">
                    {value ?? ""}
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1 }}>
                    {subtitle ?? ""}
                </Typography>
                {linkTitle ? (
                    <Link
                        color="primary"
                        href={linkHref ?? "#"}
                        target="_blank"
                    >
                        {linkTitle}
                    </Link>
                ) : null}
            </Paper>
        </Grid>
    )
}
